import React from 'react';
import { TransitionProps } from '@mui/material/transitions';
import Slide from '@mui/material/Slide';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
// icon
import CloseIcon from '@mui/icons-material/Close';
// myPage
import MyTitleBar from '../myPage/TitleBar';
import MyProfile from '../myPage/Profile';
// MyTools
import MyToolsImageCrop from '../MyTools/ImageCrop';

// ツール画面は下から上にスライドさせる
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Home() {
  // 1番のToolの開閉設定
  const [openTool01, setOpenTool01] = React.useState(false);
  const handleOpenTool01 = () => { setOpenTool01(true); };
  const handleCloseTool01 = () => { setOpenTool01(false); };

  // ホーム画面の描画
  return (
    <Box>
      <MyTitleBar />
      <Divider textAlign="left" sx={{my:"2%"}}>プロフィール</Divider>
      <MyProfile />
      <Divider textAlign="left" sx={{my:"2%"}}>My Tools</Divider>
      <Grid container spacing={1} sx={{width:"98%", mx:"1%"}} columns={3} alignItems="center">{/* Gridで画面を横に3等分する */}
        <Grid item xs={1}><Button variant="outlined" color="secondary" sx={{width:"100%",px:"2px"}} onClick={handleOpenTool01}>まんまる切り抜きツール</Button></Grid>
        <Grid item xs={2}><Box sx={{color:"secondary.main"}}>画像を正円で切り抜き、PNG形式で保存できます。</Box></Grid>
      </Grid>
      {/** 以下、ダイアログ(ボタンを押して呼び出す画面) **/}
      <Dialog fullScreen sx={{mx:"auto", maxWidth:"800px"}} open={openTool01} onClose={handleCloseTool01} TransitionComponent={Transition}>
        <AppBar sx={{position: 'relative'}} color="secondary">
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" onClick={handleCloseTool01} aria-label="close"><CloseIcon /></IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">My Tools　|　まんまる切り抜きツール</Typography>
            <Button autoFocus color="inherit" onClick={handleCloseTool01}>閉じる</Button>
          </Toolbar>
        </AppBar>
        <MyToolsImageCrop />
      </Dialog>
    </Box>
  )
};
