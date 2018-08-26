from django.shortcuts import render

def spa(request, pk=None):

    return render(request, 'index.html')
