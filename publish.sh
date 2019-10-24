#!/bin/bash
mkdir build/lib \
&& cp src/components/* build/lib \
&& cd build \
&& npm publish --registry http://registry.npmjs.org \
&& rm lib -r