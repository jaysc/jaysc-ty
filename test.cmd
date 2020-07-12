pushd c:\nodejs
del npm npm.cmd npx npx.cmd
move node_modules\npm node_modules\npm2
call node node_modules\npm2\bin\npm-cli.js i npm@latest -g
rmdir /S /Q node_modules\npm2
popd
pause