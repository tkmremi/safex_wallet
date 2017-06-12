/*eslint-disable no-unused-vars*/
import React from 'react';
import Display from './Display';
import Loading from './Loading';
import fs from '../utils/fs';
import { Link } from 'react-router';
import { filenameWallet } from '../constants';
import { store as store$ } from '../store';
import { thisPath } from '../utils/fs';

class Home extends React.Component {
    constructor(props) {
        super(props);

        store$.subscribe(this);

        this.state = {
            error: null,
            isLoading: true,
            walletExists: false,
            walletData: '',
            errorWalletData: false,
        };
    }

    componentDidMount() {
        const readWalletFile = fs.readFile(thisPath(filenameWallet), 'utf8');

        const onSuccess = undefined; // @TODO: parse logic

        const onError = error => {
            this.setState({
                errorWalletData: error.message,
                walletExists: error.code !== 'ENOENT',
                isLoading: false,
            });
        };

        const onComplete = () => {
            this.setState({
                errorWalletData: false,
                isLoading: false,
            });
        };

        store$.dispatch(this, 'walletData', readWalletFile, { onSuccess, onError, onComplete });
    }

    render() {
        return (
          <div>
            <div className="App-intro">
              Initial Page
            </div>

            <div>
                {this.state.walletData}<br />
                <Display if={this.state.errorWalletData}>
                    {this.state.errorWalletData}<br />
                    <Display if={!this.state.walletExists}>
                        Create new wallet <Link to="/settings/address">here</Link><br />
                    </Display>
                </Display>
            </div>

            <Loading isLoading={this.state.isLoading} text="loading wallet file..." />
          </div>
        );
    }
}

export default Home;
