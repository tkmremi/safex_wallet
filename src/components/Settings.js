import React from 'react';
import { Link } from 'react-router';
import fs, { dialog } from '../utils/fs';
import '../css/Settings.css';
export default class Settings extends React.Component {
    exportWallet() {
        // @TODO: content export
        const content = `JSON structure with key pairs at "${new Date()}"`;

        dialog.showSaveDialog(fileName => {
            if (!fileName) {
                alert(`The wallet export was canceled`);
                return;
            }

            fs.writeFile(fileName, content, { mode: 0o600 }).then(
                () => alert(`The file has been succesfully saved`),
                (err) => alert(`An error ocurred creating the file: ${err.message}`)
            );
        });
    }

    render() {
        return (
            <div className="container-fluid Settings">
                <h2>Settings</h2>
                <div className="jumbotron">
                    <div className="row">
                        <div className="col-xs-12">
                            <h3>Export Wallet</h3>
                            <a className="btn btn-default" onClick={this.exportWallet}>Export</a>
                        </div>
                        <div className="col-xs-12">
                            <h3>Addresses
                                <Link to="/settings/address" className="btn btn-default pull-right">Add New Address</Link>
                            </h3>
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Public Key</th>
                                        <th>Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            1DKnTPHxP7kEajt1iE9SpHHdq87AyoCDuh
                                        </td>
                                        <td>
                                            <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            1DKnTPHxP7kEajt1iE9SpHHdq87AyoCDuh
                                        </td>
                                        <td>
                                            <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
