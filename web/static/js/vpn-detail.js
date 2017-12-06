/**
 * Created by kecorbin on 11/11/17.
 */

// invoke pass through api calls to NSO
function check_sync(url) {

  $.ajax({
     url: url,
     method: 'POST',
     success: function (msg) {
        var synced = msg["vpn:output"]["in-sync"]
        if (synced) {
            $("#check-sync").addClass("btn--success")
            $("#check-sync")[0].innerText ="in-sync"
            // alert('Configuration Is Correct')
        } else {
            alert('Could be a config problem, try a reactive redeploy')
        }

      }
 })

}
function redeploy(url) {

  $.ajax({
     url: url,
     method: 'POST',
     success: function (msg) {
          $("#redeploy-button").addClass("btn--success")
          $("#redeploy-button")[0].innerText ="Re-Deployed"
          // alert('Configuration Is Correct')
      }

 })

}

function undeploy(url) {

  $.ajax({
     url: url,
     method: 'POST',
     success: function (msg) {
          alert('VPN Successfully Undeployed')
      }

 })

}
