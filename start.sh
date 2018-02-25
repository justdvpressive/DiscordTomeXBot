#!/bin/sh

echo "First bot start";

while :
do
  cd $(pwd);
  node bot;
  echo "Restarting bot";
done
