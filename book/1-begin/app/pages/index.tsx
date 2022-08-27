import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import Button from '@material-ui/core/Button';
import { notify, notifyError } from '../lib/notify';
import confirm from '../lib/confirm';
import { makeStyles } from '@material-ui/core/styles'
import NProgress from 'nprogress';

const useStyles = makeStyles({
  '@global': {
    body: {
      margin: 0,
    },
  },
  container: {
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
  },
})

//  const Index = () => (
//  const Index: React.FC = () => {
class Index extends React.Component {
  constructor(props) {
    super(props)
    this.classes = useStyles
    this.state = {
      isAnimating: false,
      key: 0
    }
  }
  
  public render() {

    return (
      //<Layout firstGridItem={true}>
      <Layout firstGridItem={this.props.firstGridItem} isMobile={this.props.isMobile}>
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

          <hr/>

            <Button
            variant="contained"
            onClick={() =>
              confirm({
                title: 'Are you sure?',
                message: 'explanatory message',
                onAnswer: async (answer) => {
                  console.log(answer);

                  if (!answer) {
                    return;
                  }
                  
                  NProgress.start();

                  try {
                    notify('You successfully confirmed.');
                  } catch (error) {
                    console.error(error);
                    notify(error);
                  }
                },
              })
            }
          >
            Test Confirmer and Notifier
          </Button>    

          <hr/>
     
        </div>
      </Layout>
    )
  }
};

export default Index;
