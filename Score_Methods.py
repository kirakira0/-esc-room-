from google.appengine.api import users
from google.appengine.ext import ndb
from User_Models import *

def OrderedScores():
    lowesttime_users = User.query().order(User.lowest_time).fetch(limit=8)
    return[(user.user_name, user.lowest_time)for user in lowesttime_users]
