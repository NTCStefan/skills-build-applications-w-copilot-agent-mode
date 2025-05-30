

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import User, Team, Activity, Workout, Leaderboard
from .serializers import UserSerializer, TeamSerializer, ActivitySerializer, WorkoutSerializer, LeaderboardSerializer

CODESPACE_API_BASE = "https://ominous-train-v66pw964ppx6fx569-8000.app.github.dev/api/"

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    @action(detail=False, methods=['get'])
    def codespace_endpoint(self, request):
        return Response({"codespace_api": CODESPACE_API_BASE + "users/"})

class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer

    @action(detail=False, methods=['get'])
    def codespace_endpoint(self, request):
        return Response({"codespace_api": CODESPACE_API_BASE + "teams/"})

class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer

    @action(detail=False, methods=['get'])
    def codespace_endpoint(self, request):
        return Response({"codespace_api": CODESPACE_API_BASE + "activity/"})

class WorkoutViewSet(viewsets.ModelViewSet):
    queryset = Workout.objects.all()
    serializer_class = WorkoutSerializer

    @action(detail=False, methods=['get'])
    def codespace_endpoint(self, request):
        return Response({"codespace_api": CODESPACE_API_BASE + "workouts/"})

class LeaderboardViewSet(viewsets.ModelViewSet):
    queryset = Leaderboard.objects.all()
    serializer_class = LeaderboardSerializer

    @action(detail=False, methods=['get'])
    def codespace_endpoint(self, request):
        return Response({"codespace_api": CODESPACE_API_BASE + "leaderboard/"})
