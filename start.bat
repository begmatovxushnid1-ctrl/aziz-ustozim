@echo off
title Koreys Tili Repetitori - Aziz Ustoz
echo ======================================================
echo    Koreys Tili Repetitori Onlayn Ro'yxatdan O'tish
echo    Ustoz: @Aziz_sem
echo ======================================================
echo Server ishga tushmoqda...
echo Brauzerda quyidagi manzilni oching: http://localhost:5000
echo.
call node_modules\.bin\next.cmd start -H 127.0.0.1 -p 5000
pause
