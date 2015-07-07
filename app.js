var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);

var routes = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login');
var exphbs  = require('express-handlebars');
var User = require('./model/user.js');
var passport = require('passport');
var bcrypt = require('bcrypt-nodejs');
var LocalStrategy = require('passport-local').Strategy;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({
     defaultLayout: __dirname + '/views/layouts/main.handlebars',
     partialsDir: __dirname + '/views/partials',
     layoutsDir: __dirname + '/views/layouts'
}));
app.set('view engine', 'handlebars');

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Setting express sessions on redis
app.use(session({ 
    store: new RedisStore({
        host: '127.0.0.1',
        port: 6379
    }), 
    secret: 's?g2$sK!n6#G.uv',
    proxy: true,
    resave: true,
    saveUninitialized: true
}));

// passport initilization
passport.use(new LocalStrategy(function(username, password, done) {
    new User({email: username}).fetch().then(function(data) {
        var user = data;
        if(user === null) {
            console.log('Invalid username')
            return done(null, false, {message: 'Contraseña o usuario inválido'});
        } else {
            user = data.toJSON();
            if(!bcrypt.compareSync(password, user.password)) {
                console.log('Invalid password');
                return done(null, false, {message: 'Contraseña o usuario inválido'});
            } else {
                return done(null, user);
            }
        }
    });
}));

passport.serializeUser(function(user, done) {
    done(null, user.email);
});

passport.deserializeUser(function(username, done) {
    new User({email: username}).fetch().then(function(user) {
       done(null, user);
    });
});

// initializing password manager
app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);
app.use('/api/users', users);
app.use('/login', login);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    res.render('404');
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
