import { env } from 'process';


const parseEnv = () => {
    console.log('RSS_bar = ', env.RSS_bar)
    console.log('RSS_foo = ', env.RSS_foo)
};

parseEnv();