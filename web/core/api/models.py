from __future__ import unicode_literals

from django.db import models
from core.api.constants import LEAGUE_TYPE, MEMBER_TYPE


# Create your models here.
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
    member_type = models.CharField(max_length=36)
    
    class Meta:
        db_table = 'league_membership'


class User(models.Model):
    username = models.CharField(max_length=36)
    # password = 
    # Image uploaded to S3
    rating = models.IntegerField()
    client_id = models.CharField(max_length=36)
    email = models.CharField(max_length=36)
    leagues = models.ManyToManyField(League, through='LeagueMembership')

    class Meta:
        db_table = 'user'
        verbose_name = "user"

class Pairing(models.Model):
    round_number = models.IntegerField()
    white = models.ForeignKey('User')
    black = models.ForeignKey('User')
    date = models.DateField()
    league = models.ForeignKey('League')
    season = models.ForeignKey('Season')
    
    #TODO add chat conversations

    class Meta:
        db_table = 'pairing'
        verbose_name = "pairings"


class Round(models.Model):
    rounds = models.OneToMany('Pairing')



class Season(models.Model):
    season_number = models.IntegerField(default=1)
    current_round = models.IntegerField(default=1)
    number_of_rounds = models.IntegerField(default=6)
    league = models.ForeignKey('League', on_delete=models.CASCADE)
    start_date = models.DateField()



