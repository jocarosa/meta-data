{"changed":true,"filter":false,"title":"meta.js","tooltip":"/meta.js","value":"var express     = require('express');\nvar app         = express();\nvar multer      = require('multer');\nvar upload      = multer({ dest: './public/uploads/' });\nvar size;\n\napp.set('view engine', 'jade');\n\n\napp.get('/',function(req,res){\n    res.render('index.jade');\n});\n\n\n//routes\n\napp.post('/',upload.single('myfile'), function (req, res) {\n   \n    size    = 'the size is '+req.file.size;\n    res.render('index.jade',{message:size});\n   \n});\n\n\n\nvar port = process.env.PORT || 8080;\napp.listen(port,  function () {\n\tconsole.log('Node.js listening on port ' + port + '...');\n});","undoManager":{"mark":95,"position":100,"stack":[[{"start":{"row":6,"column":3},"end":{"row":6,"column":4},"action":"insert","lines":[" "],"id":2129}],[{"start":{"row":6,"column":4},"end":{"row":6,"column":5},"action":"insert","lines":["s"],"id":2130}],[{"start":{"row":6,"column":5},"end":{"row":6,"column":6},"action":"insert","lines":["e"],"id":2131}],[{"start":{"row":6,"column":6},"end":{"row":6,"column":7},"action":"insert","lines":["s"],"id":2132}],[{"start":{"row":6,"column":7},"end":{"row":6,"column":8},"action":"insert","lines":["s"],"id":2133}],[{"start":{"row":6,"column":8},"end":{"row":6,"column":9},"action":"insert","lines":["i"],"id":2134}],[{"start":{"row":6,"column":9},"end":{"row":6,"column":10},"action":"insert","lines":["o"],"id":2135}],[{"start":{"row":6,"column":10},"end":{"row":6,"column":11},"action":"insert","lines":["n"],"id":2136}],[{"start":{"row":6,"column":4},"end":{"row":6,"column":11},"action":"remove","lines":["session"],"id":2137},{"start":{"row":6,"column":4},"end":{"row":6,"column":11},"action":"insert","lines":["session"]}],[{"start":{"row":6,"column":11},"end":{"row":6,"column":12},"action":"insert","lines":[" "],"id":2138}],[{"start":{"row":6,"column":12},"end":{"row":6,"column":16},"action":"insert","lines":["    "],"id":2139}],[{"start":{"row":6,"column":16},"end":{"row":6,"column":17},"action":"insert","lines":["="],"id":2140}],[{"start":{"row":6,"column":17},"end":{"row":6,"column":18},"action":"insert","lines":[" "],"id":2141}],[{"start":{"row":6,"column":18},"end":{"row":6,"column":19},"action":"insert","lines":["r"],"id":2142}],[{"start":{"row":6,"column":19},"end":{"row":6,"column":20},"action":"insert","lines":["e"],"id":2143}],[{"start":{"row":6,"column":20},"end":{"row":6,"column":21},"action":"insert","lines":["q"],"id":2144}],[{"start":{"row":6,"column":21},"end":{"row":6,"column":22},"action":"insert","lines":["u"],"id":2145}],[{"start":{"row":6,"column":22},"end":{"row":6,"column":23},"action":"insert","lines":["i"],"id":2146}],[{"start":{"row":6,"column":23},"end":{"row":6,"column":24},"action":"insert","lines":["r"],"id":2147}],[{"start":{"row":6,"column":24},"end":{"row":6,"column":25},"action":"insert","lines":["e"],"id":2148}],[{"start":{"row":6,"column":25},"end":{"row":6,"column":27},"action":"insert","lines":["()"],"id":2149}],[{"start":{"row":6,"column":26},"end":{"row":6,"column":28},"action":"insert","lines":["''"],"id":2150}],[{"start":{"row":6,"column":27},"end":{"row":6,"column":28},"action":"insert","lines":["s"],"id":2151}],[{"start":{"row":6,"column":28},"end":{"row":6,"column":29},"action":"insert","lines":["e"],"id":2152}],[{"start":{"row":6,"column":29},"end":{"row":6,"column":30},"action":"insert","lines":["s"],"id":2153}],[{"start":{"row":6,"column":30},"end":{"row":6,"column":31},"action":"insert","lines":["s"],"id":2154}],[{"start":{"row":6,"column":31},"end":{"row":6,"column":32},"action":"insert","lines":["i"],"id":2155}],[{"start":{"row":6,"column":32},"end":{"row":6,"column":33},"action":"insert","lines":["o"],"id":2156}],[{"start":{"row":6,"column":33},"end":{"row":6,"column":34},"action":"insert","lines":["n"],"id":2157}],[{"start":{"row":7,"column":0},"end":{"row":7,"column":38},"action":"remove","lines":["app.use(cookieParser('secretString'));"],"id":2158}],[{"start":{"row":7,"column":0},"end":{"row":9,"column":0},"action":"remove","lines":["","app.use(session({cookie: { maxAge: 60000 }}));",""],"id":2159},{"start":{"row":7,"column":0},"end":{"row":8,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":8,"column":0},"end":{"row":13,"column":3},"action":"insert","lines":["app.use(session({","  secret: 'keyboard cat',","  resave: false,","  saveUninitialized: true,","  cookie: { secure: true }","}))"],"id":2160}],[{"start":{"row":13,"column":3},"end":{"row":14,"column":0},"action":"insert","lines":["",""],"id":2161}],[{"start":{"row":6,"column":27},"end":{"row":6,"column":34},"action":"remove","lines":["session"],"id":2162},{"start":{"row":6,"column":27},"end":{"row":6,"column":42},"action":"insert","lines":["express-session"]}],[{"start":{"row":13,"column":3},"end":{"row":13,"column":4},"action":"insert","lines":[";"],"id":2163}],[{"start":{"row":6,"column":44},"end":{"row":6,"column":45},"action":"insert","lines":[";"],"id":2164}],[{"start":{"row":4,"column":0},"end":{"row":4,"column":9},"action":"remove","lines":["var size;"],"id":2165}],[{"start":{"row":7,"column":0},"end":{"row":7,"column":9},"action":"insert","lines":["var size;"],"id":2166}],[{"start":{"row":4,"column":0},"end":{"row":5,"column":0},"action":"remove","lines":["",""],"id":2167}],[{"start":{"row":7,"column":0},"end":{"row":8,"column":0},"action":"insert","lines":["",""],"id":2168}],[{"start":{"row":33,"column":3},"end":{"row":33,"column":21},"action":"remove","lines":[" console.log(size)"],"id":2169}],[{"start":{"row":30,"column":4},"end":{"row":31,"column":51},"action":"insert","lines":["req.flash('info', \"Credenciales invalidas, intente nuevamente\");","res.render('index', {messages: req.flash('info')});"],"id":2170}],[{"start":{"row":31,"column":0},"end":{"row":31,"column":4},"action":"insert","lines":["    "],"id":2171}],[{"start":{"row":32,"column":48},"end":{"row":32,"column":52},"action":"remove","lines":["size"],"id":2172},{"start":{"row":32,"column":48},"end":{"row":32,"column":49},"action":"insert","lines":["'"]}],[{"start":{"row":32,"column":49},"end":{"row":32,"column":50},"action":"insert","lines":["'"],"id":2173}],[{"start":{"row":32,"column":49},"end":{"row":32,"column":50},"action":"insert","lines":["s"],"id":2174}],[{"start":{"row":32,"column":50},"end":{"row":32,"column":51},"action":"insert","lines":["i"],"id":2175}],[{"start":{"row":32,"column":51},"end":{"row":32,"column":52},"action":"insert","lines":["z"],"id":2176}],[{"start":{"row":32,"column":52},"end":{"row":32,"column":53},"action":"insert","lines":["e"],"id":2177}],[{"start":{"row":30,"column":15},"end":{"row":30,"column":19},"action":"remove","lines":["info"],"id":2178},{"start":{"row":30,"column":15},"end":{"row":30,"column":16},"action":"insert","lines":["s"]}],[{"start":{"row":30,"column":16},"end":{"row":30,"column":17},"action":"insert","lines":["i"],"id":2179}],[{"start":{"row":30,"column":17},"end":{"row":30,"column":18},"action":"insert","lines":["z"],"id":2180}],[{"start":{"row":30,"column":18},"end":{"row":30,"column":19},"action":"insert","lines":["e"],"id":2181}],[{"start":{"row":30,"column":22},"end":{"row":30,"column":66},"action":"remove","lines":["\"Credenciales invalidas, intente nuevamente\""],"id":2182},{"start":{"row":30,"column":22},"end":{"row":30,"column":23},"action":"insert","lines":["s"]}],[{"start":{"row":30,"column":23},"end":{"row":30,"column":24},"action":"insert","lines":["i"],"id":2183}],[{"start":{"row":30,"column":24},"end":{"row":30,"column":25},"action":"insert","lines":["z"],"id":2184}],[{"start":{"row":30,"column":25},"end":{"row":30,"column":26},"action":"insert","lines":["e"],"id":2185}],[{"start":{"row":31,"column":4},"end":{"row":31,"column":55},"action":"remove","lines":["res.render('index', {messages: req.flash('info')});"],"id":2186}],[{"start":{"row":7,"column":0},"end":{"row":7,"column":1},"action":"insert","lines":["/"],"id":2187}],[{"start":{"row":7,"column":1},"end":{"row":7,"column":2},"action":"insert","lines":["*"],"id":2188}],[{"start":{"row":14,"column":0},"end":{"row":14,"column":1},"action":"insert","lines":["*"],"id":2189}],[{"start":{"row":14,"column":1},"end":{"row":14,"column":2},"action":"insert","lines":["/"],"id":2190}],[{"start":{"row":4,"column":0},"end":{"row":4,"column":1},"action":"insert","lines":["/"],"id":2191}],[{"start":{"row":4,"column":1},"end":{"row":4,"column":2},"action":"insert","lines":["/"],"id":2192}],[{"start":{"row":5,"column":0},"end":{"row":5,"column":1},"action":"insert","lines":["/"],"id":2193}],[{"start":{"row":5,"column":1},"end":{"row":5,"column":2},"action":"insert","lines":["/"],"id":2194}],[{"start":{"row":17,"column":0},"end":{"row":17,"column":1},"action":"insert","lines":["/"],"id":2195}],[{"start":{"row":17,"column":1},"end":{"row":17,"column":2},"action":"insert","lines":["/"],"id":2196}],[{"start":{"row":34,"column":3},"end":{"row":34,"column":60},"action":"insert","lines":["   res.render('index.jade',{message: req.flash('size')});"],"id":2197}],[{"start":{"row":32,"column":4},"end":{"row":32,"column":5},"action":"insert","lines":["/"],"id":2198}],[{"start":{"row":32,"column":5},"end":{"row":32,"column":6},"action":"insert","lines":["/"],"id":2199}],[{"start":{"row":34,"column":39},"end":{"row":34,"column":57},"action":"remove","lines":[" req.flash('size')"],"id":2200},{"start":{"row":34,"column":39},"end":{"row":34,"column":40},"action":"insert","lines":["s"]}],[{"start":{"row":34,"column":40},"end":{"row":34,"column":41},"action":"insert","lines":["e"],"id":2201}],[{"start":{"row":34,"column":41},"end":{"row":34,"column":42},"action":"insert","lines":["i"],"id":2202}],[{"start":{"row":34,"column":42},"end":{"row":34,"column":43},"action":"insert","lines":["z"],"id":2203}],[{"start":{"row":34,"column":42},"end":{"row":34,"column":43},"action":"remove","lines":["z"],"id":2204}],[{"start":{"row":34,"column":41},"end":{"row":34,"column":42},"action":"remove","lines":["i"],"id":2205}],[{"start":{"row":34,"column":40},"end":{"row":34,"column":41},"action":"remove","lines":["e"],"id":2206}],[{"start":{"row":34,"column":40},"end":{"row":34,"column":41},"action":"insert","lines":["i"],"id":2207}],[{"start":{"row":34,"column":41},"end":{"row":34,"column":42},"action":"insert","lines":["z"],"id":2208}],[{"start":{"row":34,"column":42},"end":{"row":34,"column":43},"action":"insert","lines":["e"],"id":2209}],[{"start":{"row":30,"column":3},"end":{"row":30,"column":4},"action":"insert","lines":["/"],"id":2210}],[{"start":{"row":30,"column":4},"end":{"row":30,"column":5},"action":"insert","lines":["/"],"id":2211}],[{"start":{"row":7,"column":0},"end":{"row":14,"column":2},"action":"remove","lines":["/*","app.use(session({","  secret: 'keyboard cat',","  resave: false,","  saveUninitialized: true,","  cookie: { secure: true }","}));","*/"],"id":2212}],[{"start":{"row":4,"column":0},"end":{"row":5,"column":47},"action":"remove","lines":["//var flash       = require('connect-flash');","//var session     = require('express-session');"],"id":2213}],[{"start":{"row":9,"column":1},"end":{"row":9,"column":19},"action":"remove","lines":["/app.use(flash());"],"id":2214}],[{"start":{"row":9,"column":0},"end":{"row":9,"column":1},"action":"remove","lines":["/"],"id":2215}],[{"start":{"row":22,"column":3},"end":{"row":24,"column":60},"action":"remove","lines":["// req.flash('size', size);","    ","    //res.render('index.jade',{message: req.flash('size')});"],"id":2216}],[{"start":{"row":22,"column":3},"end":{"row":23,"column":4},"action":"remove","lines":["","    "],"id":2217}],[{"start":{"row":23,"column":4},"end":{"row":23,"column":5},"action":"remove","lines":[" "],"id":2218}],[{"start":{"row":23,"column":4},"end":{"row":23,"column":5},"action":"remove","lines":[" "],"id":2219}],[{"start":{"row":22,"column":3},"end":{"row":23,"column":0},"action":"remove","lines":["",""],"id":2220}],[{"start":{"row":22,"column":3},"end":{"row":22,"column":4},"action":"remove","lines":[" "],"id":2221}],[{"start":{"row":22,"column":3},"end":{"row":22,"column":4},"action":"remove","lines":[" "],"id":2222}],[{"start":{"row":22,"column":3},"end":{"row":22,"column":4},"action":"remove","lines":[" "],"id":2223}],[{"start":{"row":8,"column":0},"end":{"row":8,"column":34},"action":"remove","lines":["app.use(express.static('public'));"],"id":2224}],[{"start":{"row":4,"column":0},"end":{"row":5,"column":0},"action":"remove","lines":["",""],"id":2225}],[{"start":{"row":7,"column":0},"end":{"row":8,"column":0},"action":"remove","lines":["",""],"id":2226}],[{"start":{"row":7,"column":0},"end":{"row":8,"column":0},"action":"remove","lines":["",""],"id":2227}],[{"start":{"row":23,"column":0},"end":{"row":24,"column":0},"action":"remove","lines":["",""],"id":2228}],[{"start":{"row":23,"column":0},"end":{"row":24,"column":0},"action":"remove","lines":["",""],"id":2229}]]},"ace":{"folds":[],"scrolltop":120,"scrollleft":0,"selection":{"start":{"row":20,"column":3},"end":{"row":20,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":6,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1470327282046}