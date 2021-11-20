import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';

// icons-material
import { grey } from '@mui/material/colors';
import LaunchSharpIcon from '@mui/icons-material/LaunchSharp';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import BrowserNotSupportedIcon from '@mui/icons-material/BrowserNotSupported';

export default function Profile() {
  return (
    <Box>
      <Grid container spacing={0} sx={{width:"98%", mx:"1%"}} columns={24}>{/* Gridで画面を横に24等分する */}
        {/* プロフィール */}
        <Grid item xs={6}>
          <Alert icon={<AccountBoxIcon fontSize="inherit" color="success" />} color="success" sx={{height:"100%"}}>
            <strong>むよう</strong>
          </Alert>
        </Grid>
        <Grid item xs={18}>
          <Alert icon={false} color="success">
            <strong>スマホで Twitter や YouTube 見ながらダラダラするのが好き。</strong><br />
            <strong>PSO2 と アイマス と アサルトリリィ が好き。</strong><br />
            <strong>・・・たぶん。</strong><br />
          </Alert>
        </Grid>
        {/* Twitter の プロフィール */}
        <Grid item xs={6}>
          <Alert icon={<TwitterIcon fontSize="inherit" color="primary" />} color="info">
            <strong>ついったー</strong>
          </Alert>
        </Grid>
        <Grid item xs={18}>
          <Alert icon={false} color="info">
            <strong><a href="https://twitter.com/Akino765" target="_blank">Akino765 <LaunchSharpIcon fontSize="inherit" sx={{verticalAlign:"bottom"}} /></a></strong>
          </Alert>
        </Grid>
        {/* GitHub の プロフィール */}
        <Grid item xs={6}>
          <Alert icon={<GitHubIcon fontSize="inherit" sx={{color:grey[900]}} />} color="info">
            <strong>GitHub</strong>
          </Alert>
        </Grid>
        <Grid item xs={18}>
          <Alert icon={false} color="info">
            <strong><a href="https://github.com/myu765" target="_blank">myu765 <LaunchSharpIcon fontSize="inherit" sx={{verticalAlign:"bottom"}} /></a></strong>
          </Alert>
        </Grid>
        {/* インスタ の プロフィール */}
        <Grid item xs={6}>
          <Alert icon={<InstagramIcon fontSize="inherit"  color="secondary"/>} color="info">
            <strong>Instagram</strong>
          </Alert>
        </Grid>
        <Grid item xs={18}>
          <Alert icon={false} color="info">
            <strong><a href="#"><BrowserNotSupportedIcon fontSize="inherit" sx={{verticalAlign:"bottom"}} /></a></strong>
          </Alert>
        </Grid>
      </Grid>
    </Box>
  )
};