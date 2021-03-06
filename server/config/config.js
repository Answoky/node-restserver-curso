
// ============================================
// Puerto
// ============================================
process.env.PORT = process.env.PORT || 3000;


// ============================================
// Entorno
// ============================================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ============================================
// Vencimiento del Token
// ============================================
// 60 segundo * 60 minutos * 24 horas * 30 dias

process.env.TOKEN_CADUCIDAD = 60 * 60 * 24 * 30;

// ============================================
// Secrect del Token
// ============================================

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

// ============================================
// Base de datos
// ============================================

// ============================================
// Base de datos
// ============================================

let urlDB;

if ( process.env.NODE_ENV === 'dev' ) {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

// ============================================
// Google Client ID
// ============================================
process.env.CLIENT_ID = '321991458777-afqpgr6uhsuls5f1nc1hn4mvc3j9k14t.apps.googleusercontent.com';