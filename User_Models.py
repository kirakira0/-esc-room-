from google.appengine.ext import ndb

class User(ndb.Model):
    user_name = ndb.StringProperty(required=True)
    lowest_time = ndb.IntegerProperty(default=600)
    score = ndb.IntegerProperty(default=600)
    email = ndb.StringProperty(required=True)
