from django.shortcuts import render
from django.views.generic import View, TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin
# from formtools.wizard.views import SessionWizardView

# Create your views here.


class Home(TemplateView):
    template_name = 'home.html'


class Forum(TemplateView):
    template_name = 'forum.html'

class QT1(TemplateView):
    template_name = 'q1.html'

class QT2(TemplateView):
    template_name = 'q2.html'


