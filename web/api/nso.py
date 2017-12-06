from flask_restful import Resource

if __name__ == '__main__':
    if __package__ is None:
        sys.path.append(
            os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        )

from services.nso import send_post


class NSOPassthrough(Resource):
    """
    proxy endpoint for NSO resources
    check-sync, re-deploy, etc
    """
    def post(self, nso_url):
        resp = send_post(nso_url)
        return resp.json()
