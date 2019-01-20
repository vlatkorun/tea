<?php

namespace App\Contracts\Http\Requests;

interface ContainsResourceInterface
{
    public function setResource($resource) : ContainsResourceInterface;

    public function getResource();

    public function getResourceFromRequest();
}