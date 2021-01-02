from rest_framework.routers import DefaultRouter
from forum.views import CommentViewSet, ForumViewSet

router = DefaultRouter()
router.register(r'comments', CommentViewSet, basename='comments')
router.register(r'forums', ForumViewSet, basename='forums')
urlpatterns = router.urls
