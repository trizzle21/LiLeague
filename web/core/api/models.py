from __future__ import unicode_literals

from django.db import models
from core.api.constants import LEAGUE_TYPE, MEMBER_TYPE
from django.contrib.auth.models import AbstractUser


class League(models.Model):
    name = models.CharField(max_length=36)
    slug = models.SlugField()
    type = models.CharField(choices=LEAGUE_TYPE, default='W', max_length=2)
    time_control = models.CharField(max_length=36)
    fixed_date = models.DateField(null=True)

    class Meta:
        db_table = 'league'


class LeagueMembership(models.Model):
    league = models.ForeignKey('League', on_delete=models.CASCADE)
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    date_joined = models.DateField()
    member_type = models.CharField(max_length=36, choices=MEMBER_TYPE)
    
    class Meta:
        db_table = 'league_membership'


class User(AbstractUser):
    username = models.CharField(max_length=36, unique=True)
    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
    )
    active = models.BooleanField(default=True)
    admin = models.BooleanField(default=False) # a superuser
    rating = models.PositiveIntegerField()
    client_id = models.CharField(max_length=36)
    leagues = models.ManyToManyField(League, through='LeagueMembership')

    USERNAME_FIELD = 'username'

    class Meta:
        db_table = 'user'
        verbose_name = 'user'


class Pairing(models.Model):
    round_number = models.IntegerField()
    white = models.ForeignKey('User', related_name='white')
    black = models.ForeignKey('User', related_name='black')
    date = models.DateField()
    league = models.ForeignKey('League')
    season = models.ForeignKey('Season')
    
    class Meta:
        db_table = 'pairing'
        verbose_name = 'pairings'


class Round(models.Model):
    rounds = models.ForeignKey('Pairing')
    start_date = models.DateField()
    end_date = models.DateField()

    class Meta:
        db_table = 'round'
        verbose_name = 'round'


class Season(models.Model):
    season_number = models.IntegerField(default=1)
    current_round = models.IntegerField(default=1)
    number_of_rounds = models.IntegerField(default=6)
    league = models.ForeignKey('League', on_delete=models.CASCADE)
    start_date = models.DateField()
    end_date = models.DateField()

    class Meta:
        db_table = 'season'
        verbose_name = 'season'
