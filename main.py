import os
import webapp2
import json #lets you parse json files into python directories
import jinja2
from urllib import urlencode
from google.appengine.api import urlfetch
# for debug and logging
import pprint
import logging
from google.appengine.api import users
from User_Models import *
from Score_Methods import *

def make_new_user(name, email):
    user = User(
        user_name = name,
        email = email
    )
    user.put()

# This initializes the jinja2 Environment.
# This will be the same in every app that uses the jinja2 templating library.
the_jinja_env = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

# the handler section
class MainPageHandler(webapp2.RequestHandler):
    def get(self):
        print("GET")
        logging.debug("some helpful debug info")
        form_template = the_jinja_env.get_template('templates/main.html')
        # self.response.write(form_template.render())  # the response

        google_user = users.get_current_user()
        if google_user:
            db_user = User.query().filter(User.email == google_user.email()).get()
            if not db_user:
                make_new_user(google_user.nickname(),google_user.email())
            self.response.write(form_template.render({
                'url':users.create_logout_url('/'),
                "username": google_user.nickname(),
                "loginMess": "log out"
            }))
        else:
            self.response.write(form_template.render({
                'url':users.create_login_url('/'),
                "loginMess": "log in"
            }))

class GamePage1Handler(webapp2.RequestHandler):
    def get(self):
        print("GET")
        form_template = the_jinja_env.get_template('templates/game-page1.html')
        google_user = users.get_current_user()
        if google_user:
            self.response.write(form_template.render({
                "username": google_user.nickname()
            }))  # the response
        else:
            self.response.write(form_template.render({
                "username": "HUMAN"
            }))  # the response

class WinVer1Handler(webapp2.RequestHandler):
    def get(self):
        print("GET")
        seconds = self.request.get('seconds')
        time_taken = 600 - int(seconds)
        google_user = users.get_current_user()
        if google_user:
            user = User.query().filter(User.email == google_user.email()).get()
            if not user:
                user = User(user_name=google_user.nickname(),
                            email=google_user.email()).put()
            if user.score and user.score > time_taken:
                user.score = time_taken
            user.put()
        form_template = the_jinja_env.get_template('templates/win-ver1.html')
        self.response.write(form_template.render())

class LeaderboardHandler(webapp2.RequestHandler):
    def get(self):
        all_users = User.query().order(User.score).fetch(limit=8)
        form_template = the_jinja_env.get_template('templates/leaderboard.html')
        self.response.write(form_template.render({'all_users': all_users}))

class CreditsHandler(webapp2.RequestHandler):
    def get(self):
        print("GET")
        form_template = the_jinja_env.get_template('templates/credits.html')
        self.response.write(form_template.render())

class WinPage2Handler(webapp2.RequestHandler):
    def get(self):
        print("GET")
        seconds = self.request.get('seconds')
        time_taken = 600 - int(seconds)
        google_user = users.get_current_user()
        if google_user:
            user = User.query().filter(User.email == google_user.email()).get()
            if not user:
                user = User(user_name=google_user.nickname(),
                            email=google_user.email()).put()
            if user.score and user.score > time_taken:
                user.score = time_taken
            user.put()
        template = the_jinja_env.get_template('templates/win-ver2.html')
        self.response.write(template.render({'score': time_taken}))

class FailHandler(webapp2.RequestHandler):
    def get(self):
        print("GET")
        form_template = the_jinja_env.get_template('templates/failure1.html')
        self.response.write(form_template.render())

# the app configuration section
app = webapp2.WSGIApplication([
    ('/', MainPageHandler), #this maps the root url to the Main Page Handler    localhost:8080/form
    ('/game-page1', GamePage1Handler),
    ('/win-ver1', WinVer1Handler),
    ('/leaderboard', LeaderboardHandler),
    ('/credits', CreditsHandler),
    ('/win-ver2', WinPage2Handler),
    ('/failure1', FailHandler)


], debug=True)
