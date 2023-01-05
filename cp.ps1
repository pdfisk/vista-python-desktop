rm ../site/desktop/images -Force -Recurse -ErrorAction Ignore
rm ../site/desktop/js -Force -Recurse -ErrorAction Ignore
rm ../site/desktop/resource -Force -Recurse -ErrorAction Ignore
rm ../site/desktop/vista -Force -Recurse -ErrorAction Ignore
rm ../site/desktop/index.html -Force -ErrorAction Ignore
New-Item -ItemType Directory -Path ../site/desktop/js -Force | Out-Null
New-Item -ItemType File -Path ../site/desktop/vista/index.js -Force | Out-Null
Copy-Item -Path "compiled/dist/vista/index.html" -Destination "../site/desktop" -Force -ErrorAction Ignore
Copy-Item -Path "compiled/dist/vista/resource/qx" -Destination "../site/desktop/resource/qx" -Recurse -Force -ErrorAction Ignore
Copy-Item -Path "compiled/dist/vista/vista/index.js" -Destination "../site/desktop/vista/index.js" -Force -ErrorAction Ignore
Copy-Item -Path "source/boot/images" -Destination "../site/desktop" -Recurse -Force -ErrorAction Ignore
Copy-Item -Path "source/resource/vista" -Destination "../site/desktop/resource" -Recurse -Force -ErrorAction Ignore
Copy-Item -Path "source/boot/ace.js" -Destination "../site/desktop/js" -Force -ErrorAction Ignore
Copy-Item -Path "source/boot/ace/mode/mode-python.js" -Destination "../site/desktop/js" -Force -ErrorAction Ignore
Copy-Item -Path "source/boot/js/vm.js" -Destination "../site/desktop/js" -Force -ErrorAction Ignore
