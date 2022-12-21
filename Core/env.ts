import { config } from "dotenv";
config({ path: "../.env" })

function Env():Object {
    const EnvArray = [];
    EnvArray.push(process.env)
    return EnvArray[0]
}

export { Env };