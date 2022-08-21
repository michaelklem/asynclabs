import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import Button from '@material-ui/core/Button';
import { notify, notifyError } from '../lib/notify';

 const Index = () => (
  <Layout firstGridItem={true}>
    <Head>
      <title>Index page</title>
      <meta name="description" content="This is a description of the Index page" />
    </Head>
    <div style={{ padding: '0px 30px', fontSize: '15px', height: '100%', color: '#222' }}>
      <p>Content on Index page</p>
      
      <Link href='/csr-page' as='/csr-page'>
        <a>Go to CSR page</a>
      </Link>

      <p/>

      <Button variant="contained" onClick={() => notify('some  success text')}>
        Open Notifier
      </Button>


      <Button variant="contained" onClick={() => notify('some  text')}>
        Success
      </Button>


      <Button variant="contained" onClick={() => notifyError('some error text')}>
        Error
      </Button>
    </div>
  </Layout>
);

export default Index;
