from rest_framework.routers import DefaultRouter
from client.views import ChildViewSet, ResultViewSet, AppointmentViewSet

router = DefaultRouter()
router.register(r'childs', ChildViewSet, basename='childs')
router.register(r'results', ResultViewSet, basename='results')
router.register(r'appointments', AppointmentViewSet, basename='appointments')
urlpatterns = router.urls
