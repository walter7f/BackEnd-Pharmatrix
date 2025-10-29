import { Sequelize } from "sequelize";
import { config as configureEnvVars} from "dotenv"


class DB {
    sequelize;

    constructor(){
        configureEnvVars();
        // CONLA URL DIRECTA:
        this.sequelize = new Sequelize(process.env.URL_DB,{
            dialect: "postgres",
        })
    }   

    async connect() { 
        try {

            await this.sequelize.authenticate();
            await this.sequelize.sync();

            console.log('DB IS RUNNING');
        } catch (error) {
            console.error('ERROR IN DB CONNECTION' + error);
        }
    }

    get() {
        return this.sequelize; 
    }
}


const db = new DB();

export default db;

/*
sys/ as sysdba
show pdbs;
 alter pluggable database POLLOS_HERMANOS open;
 */
        //configureEnvVars();
         // Fragmentado:
        /*
        this.sequelize = new Sequelize({
            dialect: "postgres",
            database: process.env.DB_NAME,
            host: process.env.URL_DB,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,            
        }); */