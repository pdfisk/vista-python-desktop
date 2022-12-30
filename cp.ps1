rm ../site/desktop/* -Force -Recurse -ErrorAction Ignore
Copy-Item -Path "compiled/dist/vista/*" -Destination "../site/desktop" -Recurse -Force -ErrorAction Ignore
