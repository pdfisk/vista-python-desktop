rm ../site/desktop/resource -Force -Recurse -ErrorAction Ignore
rm ../site/desktop/vista -Force -Recurse -ErrorAction Ignore
rm ../site/desktop/index.html -Force -ErrorAction Ignore
Copy-Item -Path "compiled/dist/vista/*" -Destination "../site/desktop" -Recurse -Force -ErrorAction Ignore
Copy-Item -Path "source/resource/vista" -Destination "../site/desktop/resource" -Recurse -Force -ErrorAction Ignore
