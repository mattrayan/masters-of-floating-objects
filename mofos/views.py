import os

from django.conf import settings
from django.shortcuts import render

from .utils import get_file_from_prefix


def spa(request, pk=None):

    STATIC_DIR = os.path.join(settings.BASE_DIR, 'static')

    INLINE_BUNDLE = '/static/' + get_file_from_prefix(STATIC_DIR, 'inline')
    POLYFILLS_BUNDLE = '/static/' + get_file_from_prefix(STATIC_DIR, 'polyfills')
    SCRIPTS_BUNDLE = '/static/' + get_file_from_prefix(STATIC_DIR, 'scripts')
    VENDOR_BUNDLE = '/static/' + get_file_from_prefix(STATIC_DIR, 'vendor')
    MAIN_BUNDLE = '/static/' + get_file_from_prefix(STATIC_DIR, 'main')
    STYLES_BUNDLE = '/static/' + get_file_from_prefix(STATIC_DIR, 'styles')

    script_imports = []
    style_imports = []

    if settings.DEBUG:
        script_imports.append('<script type="text/javascript" src="' + INLINE_BUNDLE + '"></script>')
        script_imports.append('<script type="text/javascript" src="' + POLYFILLS_BUNDLE + '"></script>')
        script_imports.append('<script type="text/javascript" src="' + SCRIPTS_BUNDLE + '"></script>')
        script_imports.append('<script type="text/javascript" src="' + STYLES_BUNDLE + '"></script>')
        script_imports.append('<script type="text/javascript" src="' + VENDOR_BUNDLE + '"></script>')
        script_imports.append('<script type="text/javascript" src="' + MAIN_BUNDLE + '"></script>')
    else:
        style_imports.append('<link rel="stylesheet" href="' + STYLES_BUNDLE + '">')
        script_imports.append('<script type="text/javascript" src="' + INLINE_BUNDLE + '"></script>')
        script_imports.append('<script type="text/javascript" src="' + POLYFILLS_BUNDLE + '"></script>')
        script_imports.append('<script type="text/javascript" src="' + SCRIPTS_BUNDLE + '"></script>')
        script_imports.append('<script type="text/javascript" src="' + MAIN_BUNDLE + '"></script>')

    return render(request, 'index.html',
        context={'render_css': ''.join(style_imports), 'render_scripts': ''.join(script_imports)})
