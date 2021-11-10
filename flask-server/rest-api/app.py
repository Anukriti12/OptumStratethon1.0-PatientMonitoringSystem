import main_ml
import main_statistical
from flask import Flask, request, send_from_directory
from flask_restful import Resource, Api
import os
import subprocess

app = Flask(__name__, static_url_path='')
api = Api(app)
SITE_ROOT = os.path.realpath(os.path.dirname(__file__))


####### OPEN API BEGINS #######
@app.route('/data/<path:path>')
def send_data(path):
    return send_from_directory('data', path)

class patient_timer(Resource):
    def get(self, patient_id):
        return {'data': main_statistical.patient_level_timer_var(patient_id)}

class scatter_plot(Resource):
    def get(self, set, feature, count):
        return {'data': main_statistical.show_scatter_plot(set, feature, int(count))}

class radial_plot(Resource):
    def get(self, plot_type):
        return {'data': main_statistical.mortality_plot(plot_type)}

class apache2_score(Resource):
    def get(self, abp,temperature,heart_bpm,respiratory_rate,oxygenation,ph,sodium,potassium,hematocrit,wbc,age,scd,aki,creatinine,gcs):
        return {'data': main_statistical.calculate_apache(int(abp),int(temperature),int(heart_bpm),int(respiratory_rate),int(oxygenation),float(ph),int(sodium),int(potassium),int(hematocrit),int(wbc),int(age),scd,int(aki),int(creatinine),int(gcs))}

class risk_analysis(Resource):
    def get(self, patient_id):
        subprocess.Popen(['bash ' + SITE_ROOT + '/batch/job_template.sh'], shell=True)

class nlp(Resource):
    def get(self, patient_id):
        subprocess.Popen(['bash ' + SITE_ROOT + '/batch/nlp_job.sh'], shell=True)


####### OPEN API ENDS #######

api.add_resource(patient_timer, '/patient_timer/<patient_id>')
api.add_resource(scatter_plot, '/scatter_plot/<set>/<feature>/<count>')
api.add_resource(radial_plot, '/radial_plot/<plot_type>')
api.add_resource(apache2_score, '/apache2_score/<abp>/<temperature>/<heart_bpm>/<respiratory_rate>/<oxygenation>/<ph>/<sodium>/<potassium>/<hematocrit>/<wbc>/<age>/<scd>/<aki>/<creatinine>/<gcs>')
api.add_resource(risk_analysis, '/risk_analysis/<patient_id>')
api.add_resource(nlp, '/nlp/<patient_id>')

# http://127.0.0.1:5000/patient_timer/132539
# http://127.0.0.1:5000/scatter_plot/a/Platelets/7
# http://127.0.0.1:5000/radial_plot/2
# http://127.0.0.1:5000/apache2_score/60/37/90/20/300/7.7/190/7/50/22/44/NO%20NSCD/1/7/15
# http://127.0.0.1:5000/risk_analysis/132539
# http://127.0.0.1:5000/nlp/132539


# scatter plot: http://127.0.0.1:5000/data/scatter.html
# Radial plot: http://127.0.0.1:5000/data/report.html
# NLP result: http://127.0.0.1:5000/data/nlp/ex_doc.con

if __name__ == '__main__':
    main_statistical.ROOT = SITE_ROOT
    app.run()

