from rest_framework.response import Response
from rest_framework.decorators import api_view
import requests
from .models import Contrato  # Supondo que você tenha um modelo Contrato
from .serializers import ContratoSerializer  # Supondo que você tenha um serializer para Contrato

@api_view(['POST'])
def criar_contrato(request):
    # Salva o contrato no banco de dados
    serializer = ContratoSerializer(data=request.data)
    if serializer.is_valid():
        contrato = serializer.save()

        # Envia o contrato para a ZapSign
        zapsign_response = requests.post(
            'https://api-sandbox.zapsign.com.br/api/v1/documents',
            headers={
                'Authorization': 'Token SEU_TOKEN_AQUI'
            },
            json={
                'name': contrato.nome,
                'external_id': contrato.id,
                'signer_name': contrato.nome,
                'signer_email': request.data.get('email')  # Adicione outros detalhes conforme necessário
            }
        )

        if zapsign_response.status_code == 201:
            return Response({'message': 'Contrato criado e enviado para ZapSign com sucesso!'}, status=201)
        else:
            return Response({'error': 'Erro ao enviar contrato para ZapSign'}, status=500)
    else:
        return Response(serializer.errors, status=400)
