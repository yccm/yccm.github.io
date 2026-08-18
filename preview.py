#!/usr/bin/env python3
"""Local preview without Jekyll.

Renders index.md + _layouts/homepage.html + _includes/navbar.html into
_site/index.html (substituting {{ site.* }} values from _config.yml),
syncs assets/ into _site/assets/, then serves _site/ locally.

Usage:
  python3 preview.py               # build + serve on http://localhost:4000
  python3 preview.py 8000          # build + serve on another port
  python3 preview.py --build-only  # just rebuild _site/index.html and assets

Note: this is a lightweight stand-in for `bundle exec jekyll serve`; the real
build on GitHub Pages is done by Jekyll from the source files.
"""
import http.server
import os
import re
import shutil
import socketserver
import sys

ROOT = os.path.dirname(os.path.abspath(__file__))
SITE = os.path.join(ROOT, "_site")


def read(path):
    with open(os.path.join(ROOT, path), encoding="utf-8") as f:
        return f.read()


def build():
    cfg = {}
    for line in read("_config.yml").splitlines():
        m = re.match(r"^([a-z_]+):\s*(.+?)\s*$", line)
        if m:
            cfg[m.group(1)] = m.group(2)

    content = re.sub(r"^---.*?---\s*", "", read("index.md"), flags=re.S)
    html = read("_layouts/homepage.html")
    html = html.replace("{% include navbar.html %}", read("_includes/navbar.html"))
    html = html.replace("{{ content }}", content)
    html = re.sub(r"{%\s*if [^%]+%}", "", html)
    html = re.sub(r"{%\s*endif\s*%}", "", html)
    html = re.sub(r"{{\s*site\.([a-z_]+)\s*}}", lambda m: cfg.get(m.group(1), ""), html)

    os.makedirs(SITE, exist_ok=True)
    with open(os.path.join(SITE, "index.html"), "w", encoding="utf-8") as f:
        f.write(html)
    shutil.copytree(
        os.path.join(ROOT, "assets"),
        os.path.join(SITE, "assets"),
        ignore=shutil.ignore_patterns(".DS_Store"),
        dirs_exist_ok=True,
    )
    print("built _site/index.html and synced assets/")


def serve(port):
    os.chdir(SITE)
    with socketserver.TCPServer(("", port), http.server.SimpleHTTPRequestHandler) as httpd:
        print(f"serving at http://localhost:{port}/  (Ctrl-C to stop)")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nstopped")


if __name__ == "__main__":
    build()
    if "--build-only" not in sys.argv:
        port = next((int(a) for a in sys.argv[1:] if a.isdigit()), 4000)
        serve(port)
