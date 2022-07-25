resource "aws_acm_certificate" "acmcert" {
  domain_name = "${var.domain}"
  validation_method = "DNS"
}

resource "aws_acm_certificate_validation" "acmcert" {
  certificate_arn = aws_acm_certificate.acmcert.arn
  validation_record_fqdns = [for record in aws_route53_record.cert : record.fqdn]
}
