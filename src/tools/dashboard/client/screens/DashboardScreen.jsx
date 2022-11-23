import React from 'react';
import {
    Paper,
    Box,
    Typography,
    Container,
    Icon,
    Card
} from "@material-ui/core"
import { FileUploaderResponse } from '../components/FileUploaderResponse';
import CardMembership from '@material-ui/icons/CardMembership';
import { CardGiftcard } from '@material-ui/icons';

export const DashboardScreen = () => {

    return (
        <div>

            <div style={{ background: "black" }}>
                <div>
                    <CardGiftcard style={{color: "white", marginLeft: 50, marginTop: 10}} align={"left"} />
                    <Typography style={{color: "white", marginLeft: 20}} align={"left"}> <b>UNI-CLONE</b> </Typography>
                </div>
                <div>
                    <Typography style={{color: "white", marginRight: 200, marginTop: -20}} align={"right"}> <b>PAY 1/3rd Card</b> </Typography>
                    <Typography style={{color: "white", marginRight: 50, marginTop: -25}} align={"right"}> <b>PAY 1/2 Card</b> </Typography>
                </div>
            </div>

        
            {<FileUploaderResponse />}
        </div>
    );
}