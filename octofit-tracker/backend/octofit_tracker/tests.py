from django.test import TestCase
from .models import User, Team, Activity, Workout, Leaderboard

class UserModelTest(TestCase):
    def test_create_user(self):
        user = User.objects.create(email="test@example.com", name="Test User", password="testpass")
        self.assertEqual(user.email, "test@example.com")

class TeamModelTest(TestCase):
    def test_create_team(self):
        team = Team.objects.create(name="Test Team")
        self.assertEqual(team.name, "Test Team")

class ActivityModelTest(TestCase):
    def test_create_activity(self):
        user = User.objects.create(email="test2@example.com", name="Test User2", password="testpass2")
        activity = Activity.objects.create(user=user, activity_type="run", duration=30)
        self.assertEqual(activity.activity_type, "run")

class WorkoutModelTest(TestCase):
    def test_create_workout(self):
        workout = Workout.objects.create(name="Pushups", description="Do 20 pushups")
        self.assertEqual(workout.name, "Pushups")

class LeaderboardModelTest(TestCase):
    def test_create_leaderboard(self):
        user = User.objects.create(email="test3@example.com", name="Test User3", password="testpass3")
        leaderboard = Leaderboard.objects.create(user=user, score=100)
        self.assertEqual(leaderboard.score, 100)
