import Button from '@material-ui/core/Button';
import React from 'react';
import Head from 'next/head';
import Layout from 'components/layout';
import { notifyError, notify } from '../lib/notify';

const CSRPage = () => (
  <Layout firstGridItem={true}>
    <Head>
      <title>CSR page</title>
      <meta name="description" content="This is a description of the CSR page" />
    </Head>
    <div style={{ padding: '0px 30px', fontSize: '15px', height: '100%' }}>
      <p>Content on CSR page</p>
      <Button variant="outlined">Some button</Button>

      <hr/>

      <Button variant="contained" onClick={() => notifyError('some error text')}>
        Open Notifier
      </Button>      
    </div>



  </Layout>
);

export default CSRPage;