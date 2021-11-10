
#directories
# repo_dir=$(pwd)
# data_dir="${repo_dir}/CliNER/data"
# model_dir="${repo_dir}/CliNER/models"
# dir = "${repo_dir}/CliNER"
# batch_dir="${repo_dir}/batch"

#run command
python3 /home/ankit/Desktop/Patient-Monitoring-System/flask-server/rest-api/CliNER/cliner predict --txt /home/ankit/Desktop/Patient-Monitoring-System/flask-server/rest-api/CliNER/data/examples/ex_doc.txt --out /home/ankit/Desktop/Patient-Monitoring-System/flask-server/rest-api/data/nlp --model /home/ankit/Desktop/Patient-Monitoring-System/flask-server/rest-api/CliNER/models/silver.crf --format i2b2
# python3 "${dir}/cliner predict --txt ${data_dir}/examples/ex_doc.txt --out ${data_dir}/predictions --model ${model_dir}/silver.crf -- format i2b2"

exit
W