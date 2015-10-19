echo "Do you wish to run this program?"
select yn in "Yes" "No"; do
    case $yn in
        Yes ) nohup node ys_scrap.js > scrap_result.json; break;;
        No ) exit;;
    esac
done
echo "Opening the file !!"
sudo nano scrap_result.json