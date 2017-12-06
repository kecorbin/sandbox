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
            alert('Configuration Is Correct')
        } else {
            alert('Could be a config problem, try a reactive redeploy')
        }

      }
 })

}
