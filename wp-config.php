<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'super21_wp');

/** MySQL database username */
define('DB_USER', 'super21_wp');

/** MySQL database password */
define('DB_PASSWORD', 'ferrari1234');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'mHiMC]S>_Oyxrb3^{p|M;&KG_~|z0Bn+8T!&Y#tf&zs=5 u/[rf%E g <y?]$HNv');
define('SECURE_AUTH_KEY',  'zzP-~(U9?:Nbs/;aZmz@m$=-aHBv+W/qv=CLIUyi!$LO=FfB-=xUA5aw2[2D|Ct%');
define('LOGGED_IN_KEY',    'Bi%V!C-@&luzC+Z%#_&4E>+$U>Cr_`P4?$JGD%(X`E;~AIUNe;6RW_rAyh9#JU7|');
define('NONCE_KEY',        '@~Yg):&|-UHPAh%&.[yGA>;_-5HVE/i}2~MU]-B.2`P:RWDzr|Kn+&7)#2Mr(1cP');
define('AUTH_SALT',        'Q]xczE@khtnkN^Nw@C$EZ{(%Q#(Q*yY]t|O|huoxt5fXBB]C4RT^-R?+o![hZm++');
define('SECURE_AUTH_SALT', 'u,ADqT~9A-3agq!/[ tb^h_1g7_4F?779Jlmn@.m7^d{+&,!)kK}#-&Y.W|^#=-c');
define('LOGGED_IN_SALT',   '|^tQ{,Y9CbIFb|mkE2)i=m$|ZPLPkZ>ooZzbjD{5kU|-?QVNXP;X}~735J:bPC[K');
define('NONCE_SALT',       'A Xi(8+7-leN)F5lPkbqmt;+Sl`3+gG!2(M$`jL*u^L{|@fvtUEww+gh26(zupyI');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
