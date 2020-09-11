
<template>
  
    <span class="px-2 py-2 badge" style="color:white; background:#3E8893; border-radius:7px;"  @click.prevent="payWithRave">Enroll</span>
 
</template>
<script>
export default {
     props: {
        isProduction: {
          type: Boolean,
          required: false,
          default: false //set to true if you are going live
        },
        email: {
          type: String,
          required: true
        },
        reference:{
            type: String,
          required: true
        },
        amount: {
          type: Number,
          required: true
        },
        raveKey: {
          type: String,
          required: true
        },
        callback: {
          type: Function,
          required: true,
          default: response => {}
        },
        close: {
          type: Function,
          required: true,
          default: () => {}
        },
        currency: {
          type: String,
          default: "NGN"
        },
        country: {
          type: String,
          default: "NG"
        },
        custom_title: {
          type: String,
          default: ""
        },
        custom_logo: {
          type: String,
          default: ""
        },
        payment_method: {
          type: String,
          default: "card,barter,account,ussd"
        }
      },
     created() {
        const script = document.createElement("script");
        script.src = !this.isProduction
          ? "https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/flwpbf-inline.js"
          : "https://api.ravepay.co/flwv3-pug/getpaidx/api/flwpbf-inline.js";
        document.getElementsByTagName("head")[0].appendChild(script);
      },
    methods: {
        payWithRave() {
          window.getpaidSetup({
            customer_email: this.email,
            amount: this.amount,
            txref: this.reference,
            PBFPubKey: this.raveKey,
            onclose: () => this.close(),
            callback: response => this.callback(response),
            currency: this.currency,
            country: this.country,
            custom_title: this.custom_title,
            custom_logo: this.custom_logo,
            payment_method: this.payment_method,
          });
        }
      }
}
</script>