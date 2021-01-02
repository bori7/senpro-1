from rest_framework.routers import DefaultRouter
from client.views import ChildViewSet, ResultViewSet

router = DefaultRouter()
router.register(r'childs', ChildViewSet, basename='childs')
router.register(r'results', ResultViewSet, basename='results')
urlpatterns = router.urls
