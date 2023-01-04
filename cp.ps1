rm ../site/desktop/resource -Force -Recurse -ErrorAction Ignore
rm ../site/desktop/vista -Force -Recurse -ErrorAction Ignore
rm ../site/desktop/index.html -Force -ErrorAction Ignore
New-Item -ItemType File -Path ../site/desktop/vista/index.js -Force | Out-Null
Copy-Item -Path "compiled/dist/vista/index.html" -Destination "../site/desktop" -Force -ErrorAction Ignore
Copy-Item -Path "compiled/dist/vista/resource/qx" -Destination "../site/desktop/resource/qx" -Recurse -Force -ErrorAction Ignore
Copy-Item -Path "compiled/dist/vista/vista/index.js" -Destination "../site/desktop/vista/index.js" -Force -ErrorAction Ignore
Copy-Item -Path "source/resource/vista" -Destination "../site/desktop/resource" -Recurse -Force -ErrorAction Ignore
Copy-Item -Path "source/resource/vista" -Destination "../site/desktop/resource" -Recurse -Force -ErrorAction Ignore
