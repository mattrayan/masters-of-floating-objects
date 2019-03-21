from django.conf import settings
from django.shortcuts import render


def spa(request, pk=None):

    if settings.DEBUG:
        render_css = ''
        render_scripts = \
            '<script type="text/javascript" src="/static/inline.bundle.js"></script> \
            <script type="text/javascript" src="/static/polyfills.bundle.js"></script> \
            <script type="text/javascript" src="/static/styles.bundle.js"></script> \
            <script type="text/javascript" src="/static/scripts.bundle.js"></script> \
            <script type="text/javascript" src="/static/vendor.bundle.js"></script> \
            <script type="text/javascript" src="/static/main.bundle.js"></script>'
    else:
        render_css = '<link rel="stylesheet" href="/static/styles.bundle.css">'
        render_scripts = \
            '<script type="text/javascript" src="/static/inline.bundle.js"></script> \
            <script type="text/javascript" src="/static/polyfills.bundle.js"></script> \
            <script type="text/javascript" src="/static/scripts.bundle.js"></script> \
            <script type="text/javascript" src="/static/vendor.bundle.js"></script> \
            <script type="text/javascript" src="/static/main.bundle.js"></script>'

    return render(request, 'index.html',
        context={'render_css': render_css, 'render_scripts': render_scripts})
