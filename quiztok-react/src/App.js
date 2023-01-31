import "./App.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import AppBar from "@mui/material/AppBar";
import logo from "./logo-blue.png";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import MuiToggleButton from "@mui/material/ToggleButton";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";

const ToggleButton = styled(MuiToggleButton)(({ selectedColor }) => ({
  "&.Mui-selected, &.Mui-selected:hover": {
    color: "#3389ff",
    backgroundColor: selectedColor,
    borderColor: "#3389ff",
  },
}));
const theme = createTheme({
  palette: {
    text: {
      primary: "#00398e",
    },
  },
});
const pages = ["활동알림", "이용 가이드"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function App() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const textColor = "black";
  const primary = "#379eff";
  const [place, setPlace] = React.useState("");

  const handleChange = (event) => {
    setPlace(event.target.value);
  };

  return (
    <div>
      {" "}
      <AppBar
        position="static"
        color="primary"
        enableColorOnDark
        sx={{
          background: "#fff",
          boxShadow: "none",
          borderBottom: "solid 1px #dee3e8",
          height: 43,
          justifyContent: "center",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img src={logo} />

            <Typography
              noWrap
              component="a"
              href="/"
              sx={{
                borderLeft: "1px solid #ccc",
                pl: 1,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                fontSize: "14px",

                color: textColor,
                textDecoration: "none",
              }}
            >
              퀴즈 크레이터 센터
            </Typography>

            <Box
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color={textColor}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" color={textColor}>
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                marginRight: 16,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: textColor,
                    display: "block",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/2.jpg"
                    sx={{ width: 30, height: 30 }}
                  />
                  <Typography>얼굴없는사나이</Typography>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ flexGrow: 1, height: 43, borderBottom: "1px solid #dee3e8" }}
      >
        내 정보 수정
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} sx={{ padding: " 50px  240px" }}>
          <Grid item xs={6}>
            <Item
              sx={{
                boxShadow: "box-shadow: 0px 0px 4px 4px rgb(0 0 0 / 3%);",
                padding: "20px",
              }}
            >
              <div>
                <Typography
                  variant="h6"
                  sx={{ textAlign: "left", fontWeight: "900" }}
                >
                  크리에이터 정보
                </Typography>
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 100, height: 100, margin: "60px auto" }}
                />
                <Typography sx={{ textAlign: "left", fontWeight: "700" }}>
                  닉네임
                </Typography>

                <OutlinedInput
                  fullWidth
                  defaultValue="루돌프사슴코"
                  id="outlined-adornment-weight"
                  endAdornment={
                    <InputAdornment position="end">/10</InputAdornment>
                  }
                  sx={(style.textfield, { mt: 1 })}
                />

                <Typography
                  sx={{ textAlign: "left", fontWeight: "700", mt: 2 }}
                >
                  상태 메세지
                </Typography>

                <OutlinedInput
                  fullWidth
                  defaultValue="메리크리스마스"
                  id="outlined-adornment-weight"
                  endAdornment={
                    <InputAdornment position="end">/10</InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{}}
                />

                <Typography
                  sx={{
                    backgroundColor: "#f5f9ff",
                    color: "#4879cf",
                    fontSize: "14px",
                    fontWeight: "700",
                    padding: "10px 10px",
                    textAlign: "left",
                    margin: "30px 0 40px 0",
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "left",
                      pl: "10px",
                      color: "#fff",
                      borderRadius: "6px 6px 6px 0",
                      fontSize: "14px",
                      backgroundColor: "#4b7abf",
                      width: 156,
                      mb: "10px",
                    }}
                  >
                    크리에이터 브랜딩 TIP
                  </Typography>
                  기본 정보는 퀴즈톡의 모든 회원들에게 노출되는 대표
                  이미지입니다. 프로필 사진, 닉네임 그리고 상태 메시지는 자신의
                  콘텐츠의 방향을 명확히 보여줄 수 있는 단순하고 핵심적인
                  이미지와 텍스틀 담아야 합니다.
                </Typography>
              </div>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <div>
                <Typography
                  variant="h6"
                  sx={{ textAlign: "left", fontWeight: "700" }}
                >
                  회원 및 계정 정보 입력
                </Typography>
                <Typography
                  sx={{ textAlign: "left", fontWeight: "700", mt: "30px" }}
                >
                  이름
                </Typography>
                <TextField
                  fullWidth
                  id="outlined-required"
                  defaultValue="퀴즈톡"
                  sx={{ mt: "10px" }}
                />
                <Typography
                  sx={{
                    textAlign: "left",
                    fontWeight: "700",
                    m: "30px 0 10px 0",
                  }}
                >
                  비밀번호
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={9}>
                    <TextField id="outlined-required" fullWidth />
                  </Grid>
                  <Grid item xs={3}>
                    <Button
                      variant="outlined"
                      color="secondary"
                      fullWidth
                      sx={{
                        height: 55,
                        color: primary,
                        border: "1px solid #379eff",
                      }}
                    >
                      변경하기
                    </Button>
                  </Grid>
                </Grid>

                <Typography
                  sx={{
                    textAlign: "left",
                    fontWeight: "700",
                    m: "30px 0 10px 0",
                  }}
                >
                  성별
                </Typography>
                <ToggleButtonGroup
                  fullWidth
                  value={alignment}
                  exclusive
                  onChange={handleAlignment}
                  aria-label="text alignment"
                >
                  <ToggleButton
                    sx={{ fontWeight: "700" }}
                    value="left"
                    aria-label="left aligned"
                    selectedColor="#3389ff19"
                  >
                    여자
                  </ToggleButton>
                  <ToggleButton
                    sx={{ fontWeight: "700" }}
                    value="center"
                    aria-label="centered"
                    selectedColor="#3389ff19"
                  >
                    남자
                  </ToggleButton>
                </ToggleButtonGroup>
                <Typography
                  sx={{
                    textAlign: "left",
                    fontWeight: "700",
                    m: "30px 0 10px 0",
                  }}
                >
                  생년월일
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <OutlinedInput
                      defaultValue="1990"
                      id="outlined-adornment-weight"
                      endAdornment={
                        <InputAdornment position="end">년</InputAdornment>
                      }
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <OutlinedInput
                      defaultValue="12"
                      id="outlined-adornment-weight"
                      endAdornment={
                        <InputAdornment position="end">월</InputAdornment>
                      }
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <OutlinedInput
                      defaultValue="10"
                      id="outlined-adornment-weight"
                      endAdornment={
                        <InputAdornment position="end">일</InputAdornment>
                      }
                    />
                  </Grid>
                </Grid>
                <Typography
                  sx={{
                    textAlign: "left",
                    fontWeight: "700",
                    m: "30px 0 10px 0",
                  }}
                >
                  거주지역
                </Typography>
                <FormControl fullWidth sx={{ mb: "18px" }}>
                  <Select
                    value={place}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">
                      <span>거주지역을 선택해주세요</span>
                    </MenuItem>
                    <MenuItem value={10}>서울</MenuItem>
                    <MenuItem value={20}>경기</MenuItem>
                    <MenuItem value={30}>부산</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Stack direction="row" spacing={2}></Stack>
    </div>
  );
}

const style = {
  textfield: {},
};

export default App;
