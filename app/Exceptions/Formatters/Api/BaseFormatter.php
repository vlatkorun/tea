<?php

namespace App\Exceptions\Formatters\Api;

use Exception;
use Illuminate\Http\JsonResponse;
use Optimus\Heimdal\Formatters\BaseFormatter as OptimusBaseFormatter;

class BaseFormatter extends OptimusBaseFormatter
{
    protected $httpCode = 400;

    public function format(JsonResponse $response, Exception $exception, array $reporterResponses)
    {
        $response = $this->setStatusCode($response);

        $data = $response->getData(true);

        if ($this->debug) {
            $data = array_merge($data, [
                'code'   => $exception->getCode(),
                'message'   => $exception->getMessage(),
                'exception' => (string) $exception,
                'line'   => $exception->getLine(),
                'file'   => $exception->getFile()
            ]);
        } else {
            $data['message'] = $exception->getMessage();
        }

        $response->setData($this->prepareData($data, $exception));
    }

    protected function setStatusCode(JsonResponse $response)
    {
        return $response->setStatusCode($this->httpCode);
    }

    protected function prepareData(array $data, Exception $exception)
    {
        return $data;
    }
}