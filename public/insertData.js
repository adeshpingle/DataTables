async function migration(){

    const initOptions = {
        
        error(error, e) {
            if (e.cn) {
                console.log('CN:', e.cn);
                console.log('EVENT:', error.message || error);
            }
        }
    };
    
    const pgp = require('pg-promise')(initOptions);
    
    const dbUrl = 'postgres://postgres:123456@localhost:5432/lsef'
    console.log(dbUrl)
    const db = pgp(dbUrl);
    
    await db.connect()
        .then(db => {
            var profile = "INSERT INTO Datatables( id, first_name, last_name, age, position, salary, start_date, extn, email, office, seq )VALUES( 1, 'Tiger', 'Nixon', 61, 'System Architect', 320800, '2011/04/25', 5421, 't.nixon@datatables.net', 'Edinburgh', 2 ),( 2, 'Garrett', 'Winters', 63, 'Accountant', 170750, '2011/07/25', 8422, 'g.winters@datatables.net', 'Tokyo', 22 ),( 3, 'Ashton', 'Cox', 66, 'Junior Technical Author', 86000, '2009/01/12', 1562, 'a.cox@datatables.net', 'San Francisco', 6 ),( 4, 'Cedric', 'Kelly', 22, 'Senior Javascript Developer', 433060, '2012/03/29', 6224, 'c.kelly@datatables.net', 'Edinburgh', 41 ),( 5, 'Airi', 'Satou', 33, 'Accountant', 162700, '2008/11/28', 5407, 'a.satou@datatables.net', 'Tokyo', 55 ),( 6, 'Brielle', 'Williamson', 61, 'Integration Specialist', 372000, '2012/12/02', 4804, 'b.williamson@datatables.net', 'New York', 21 ),( 7, 'Herrod', 'Chandler', 59, 'Sales Assistant', 137500, '2012/08/06', 9608, 'h.chandler@datatables.net', 'San Francisco', 46 ),( 8, 'Rhona', 'Davidson', 55, 'Integration Specialist', 327900, '2010/10/14', 6200, 'r.davidson@datatables.net', 'Tokyo', 50 ),( 9, 'Colleen', 'Hurst', 39, 'Javascript Developer', 205500, '2009/09/15', 2360, 'c.hurst@datatables.net', 'San Francisco', 26 ),( 10, 'Sonya', 'Frost', 23, 'Software Engineer', 103600, '2008/12/13', 1667, 's.frost@datatables.net', 'Edinburgh', 18 ),( 11, 'Jena', 'Gaines', 30, 'Office Manager', 90560, '2008/12/19', 3814, 'j.gaines@datatables.net', 'London', 13 ),( 12, 'Quinn', 'Flynn', 22, 'Support Lead', 342000, '2013/03/03', 9497, 'q.flynn@datatables.net', 'Edinburgh', 23 ),( 13, 'Charde', 'Marshall', 36, 'Regional Director', 470600, '2008/10/16', 6741, 'c.marshall@datatables.net', 'San Francisco', 14 ),( 14, 'Haley', 'Kennedy', 43, 'Senior Marketing Designer', 313500, '2012/12/18', 3597, 'h.kennedy@datatables.net', 'London', 12 ),( 15, 'Tatyana', 'Fitzpatrick', 19, 'Regional Director', 385750, '2010/03/17', 1965, 't.fitzpatrick@datatables.net', 'London', 54 ),( 16, 'Michael', 'Silva', 66, 'Marketing Designer', 198500, '2012/11/27', 1581, 'm.silva@datatables.net', 'London', 37 ),( 17, 'Paul', 'Byrd', 64, 'Chief Financial Officer (CFO)', 725000, '2010/06/09', 3059, 'p.byrd@datatables.net', 'New York', 32 ),( 18, 'Gloria', 'Little', 59, 'Systems Administrator', 237500, '2009/04/10', 1721, 'g.little@datatables.net', 'New York', 35 ),( 19, 'Bradley', 'Greer', 41, 'Software Engineer', 132000, '2012/10/13', 2558, 'b.greer@datatables.net', 'London', 48 ),( 20, 'Dai', 'Rios', 35, 'Personnel Lead', 217500, '2012/09/26', 2290, 'd.rios@datatables.net', 'Edinburgh', 45 )";
            db.query(profile).then(value => {
                console.log(value)
            })
        })    
        .catch(error => {
            console.log('ERROR:', error.message || error);
    });
};

try{
	migration();
}catch(e){
	console.log("Error:", e);
}

