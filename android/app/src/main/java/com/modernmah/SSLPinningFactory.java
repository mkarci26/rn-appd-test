package com.appdTesting.appd;

import com.facebook.react.modules.network.OkHttpClientFactory;
import com.facebook.react.modules.network.OkHttpClientProvider;
import okhttp3.CertificatePinner;
import okhttp3.OkHttpClient;

public class SSLPinningFactory implements OkHttpClientFactory {

   public OkHttpClient createNewNetworkModuleClient() {

      String publicKey = "sha256/"+BuildConfig.PUBLIC_KEY;
      CertificatePinner certificatePinner = new CertificatePinner.Builder()
        .add(BuildConfig.DOMAIN_NAME, publicKey )
        .build();

      OkHttpClient.Builder clientBuilder = OkHttpClientProvider.createClientBuilder();
      return clientBuilder.certificatePinner(certificatePinner).build();
  }
}